<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Posts;
use App\Categorie;
use Auth;
use Illuminate\Support\Facades\Storage;


class AccountController extends Controller
{

    public function index(){
        return view('user.main',[]);
    }


    public function posts(){


        $posted = Posts::Select('posts.id','posts.title','posts.image','posts.description','posts.active')
            ->addSelect(Posts::raw('count(likes.id) as likes_of_post'))
            ->Where('postedby',Auth::id())
            ->orderBy('posts.created_at','desc')
            ->leftJoin('likes','likes.post','=','posts.id')
            ->groupBy('posts.id')
            ->get()
            ->toArray();

        if($posted === null) {
            abort(404, 'pagina niet gevonder');
        }

        return view('user.posts',[
            'posted' => $posted,
        ]);

    }

    public function mutatePost($id){

        $posted = Posts::Select('*')
            ->where('id','=',$id)
            ->get()
            ->toArray();

        $categorie = Categorie::all();

        if($posted === null) {
            abort(404, 'pagina niet gevonder');
        }

        if($posted[0]['postedby'] == Auth::id() || Auth::user()->admin == 1){
            return view('user.mutatePost',[
                'posted' => $posted[0],
                'categorie' => $categorie,
            ]);
        }else{
            return redirect()->route('user.account');
        }


    }

    public function updatePost(Request $request){


        $link = explode("/",$request->header('referer'));

        $id = end($link);

        $validator = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'category' => ['exists:categories,id']
        ]);


        Posts::Where('id',$id)->update(
            ['title'=>$request->get('title'),'description'=>$request->get('description'),'category'=>$request->get('categories')]
        );

        if(isset($request['image'])){

            $curImg = Posts::Select('image')->Where('id',$id)->get()->toArray();

            Storage::delete($curImg[0]['image']);

            $path = $request->file('image')->storePublicly('/public/postImages');

            $url = basename($path);

            Posts::Where('id',$id)->update(
                ['image'=>$url]
            );
        }

        return redirect()->route('user.posts');
    }


    public function settings(){
        return view('user.settings',[

        ]);
    }

    public function privacy(){
        return view('user.privacy',[

        ]);
    }

}

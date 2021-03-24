<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Posts;
use App\User;
use Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function index(){
        return view('admin.main');
    }

    public function posts(){
        $posted = Posts::Select('posts.id','posts.title','posts.image','posts.description','posts.active')
            ->addSelect(Posts::raw('count(likes.id) as likes_of_post'))
            ->orderBy('posts.created_at','desc')
            ->leftJoin('likes','likes.post','=','posts.id')
            ->groupBy('posts.id')
            ->get()
            ->toArray();

        return view('admin.posts',[
            'posted' => $posted,
        ]);
    }

    public function users(){
        $users = User::Select('*')
            ->get()
            ->toArray();

        return view('admin.users',[
            'users' => $users,
        ]);
    }

    public function editUser($id){
        $user = User::Select('*')
            ->Where('id',$id)
            ->get()
            ->toArray();

        if($user[0]['id'] === null) {
            abort(404, 'pagina niet gevonder');
        }

        return view('admin.editUser',[
            'user' => $user[0],
        ]);
    }

    public function saveUser(Request $request){

        $link = explode("/",$request->header('referer'));

        $id = end($link);

        $validator = $request->validate([
            'name' => 'required',
            'email' => 'required',
        ]);

        User::Where('id',$id)->Update(['name'=>$request->get('name'),'email'=>$request->get('email')]);

        if(null !== $request->get('password1') && $request->get('password1') == $request->get('password2')){

            User::Where('id',$id)->Update(['password'=>Hash::make($request->get('password1'))]);

        }

        if($request->get('admin') == Null){

            User::Where('id',$id)->Update(['admin'=>'0']);

        }else{

            User::Where('id',$id)->Update(['admin'=>'1']);

        }



        return redirect()->route('admin.users');
    }
}

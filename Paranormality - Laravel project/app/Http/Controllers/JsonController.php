<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Likes;
use App\Posts;
use App\User;
use Auth;

class JsonController extends Controller
{

    public function store(Request $request)
    {
        $post = Likes::select('*')
            ->where('user', '=', Auth::id())
            ->where('post', '=', $request->get('post'))
            ->count();

        if($post > 0){
            Likes::where('user', '=', Auth::id())
                ->where('post', '=', $request->get('post'))
                ->delete();
        }else {
            $like = new Likes();
            $like->post = $request->get('post');
            $like->user =Auth::id();
            $like->save();
        }

        return response()->json(['success'=>$request->all()]);
    }

    public function active(Request $request)
    {

        $status = Posts::where('id',$request->get('post'))->get()->toArray();

        if($status[0]['active'] == 1){
            Posts::where('id', $request->get('post'))
                ->update(['active' => 0]);
        }else{
            Posts::where('id', $request->get('post'))
                ->update(['active' => 1]);
        }


        return response()->json(['success'=>$request->all()]);
    }

    public function deletePost(Request $request)
    {

        Posts::where('id', $request->get('post'))->delete();

        return response()->json(['success'=>$request->all()]);

    }

    public function deleteUser(Request $request)
    {

        User::where('id', $request->get('post'))->delete();

        return response()->json(['success'=>$request->all()]);

    }
}

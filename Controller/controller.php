<?php 
   require 'controller/services/view.php';

   class Controller{
      
      public function view_search(){
         return view::createView('search.php',[]);
      }

      public function view_branch(){
         return view::createView('search.php',[]);
      }
   }
?>
<?php 
   require 'controller/services/view.php';

   class Controller{
      
      public function view_search(){
         return view::createView('search.php',[]);
      }

      public function view_compare(){
         return view::createView('compare.php',[]);
      }

      public function view_brands(){
         return view::createView('brands.php',[]);
      }
   }
?>
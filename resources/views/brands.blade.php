@extends('layouts/layout')

@section('content')
   <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb m-3">
         <li class="breadcrumb-item">Brands</li>
      </ol>
   </nav>

   <div class="container">
      <div class="row mt-5">
         <div class="col-md">
            <div class="input-group mb-3">
               <input type="text" class="form-control input-keyword" placeholder="Search brand">
            </div>
         </div>
      </div>
      <div class="row phones-container" id="js-container"></div>
   </div>
   <script>
      // console.log({!! $brandData !!});
      let brandData = {!! $brandData !!};
   </script>
   <script src="{{ asset('js/brand.js') }}" defer></script>
@endsection
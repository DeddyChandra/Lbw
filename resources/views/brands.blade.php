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
         
         </div>
      </div>

      
      {{-- Content collumn divider --}}
      <div class="row mb-3">
         <div class="col">
         </div>
         <div class="col text-center">
            <button class="btn btn-outline-dark" onclick="back_page()">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
               </svg>
            </button>
            <button class="btn btn-outline-dark" onclick="next_page()">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
               </svg>
            </button>
         </div>
         <div class="col">
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
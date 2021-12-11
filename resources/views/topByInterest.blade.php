@extends('layouts/layout')

@section('content')
   <script src="{{ asset('js/topByInterest.js') }}" defer></script>

   <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb m-3">
         <li class="breadcrumb-item active">Top by interest</li>
      </ol>
   </nav>

   <div class="container">
      <table class="table">
         <thead>
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">Phone Name</th>
                  <th scope="col">Hits</th>
               </tr>
         </thead>
         <tbody class="phones-container">
         </tbody>
      </table>
   </div>

   <!-- Modal -->
   <div class="modal fade" id="phoneDetailModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
         <div class="modal-content phone-detail-modal">
         </div>
      </div>
   </div>
@endsection
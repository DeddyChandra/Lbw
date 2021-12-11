@extends('layouts/layout')

@section('content')
   <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb m-3">
         <li class="breadcrumb-item">Charts</li>
      </ol>
   </nav>
   <div class="container">
      <div class="row my-5">
         <div class="col-2"></div>
         <div class="col" height="400">   
            <h1>Top 10 brands</h1>
            <canvas id="brandsChart" width="400" ></canvas>
         </div>
         <div class="col-2"></div>
      </div>
      <div class="row my-5">
         <div class="col-1"></div>
         <div class="col" height="400"> 
            <h1>Top 5 brands device weight</h1>
            <div class="mt-5" id="weightChartLoading" height="400"></div>
            <canvas id="weightChart" width="300"></canvas>
         </div>
         <div class="col-1"></div>
      </div>
      <div class="row my-2">
         <div class="col-6" height="300">
            <canvas id="samsungWeightChart" width="300" height="300"></canvas>
         </div>
         <div class="col-6" height="300">
            <canvas id="appleWeightChart" width="300" height="300"></canvas>
         </div>
      </div>
      <div class="row my-2">
         <div class="col-6" height="300">
            <canvas id="huaweiWeightChart" width="300" height="300"></canvas>
         </div>
         <div class="col-6" height="300">
            <canvas id="oppoWeightChart" width="300" height="300"></canvas>
         </div>
      </div>
      <div class="row my-2">
         <div class="col-2"></div>
         <div class="col" height="300">
            <canvas id="xiaomiWeightChart" width="300" height="200"></canvas>
         </div>
         <div class="col-2"></div>
      </div>
   </div>
   <script>
      const samsungName = {!! $samsungName !!};
      const appleName = {!! $appleName !!};
      const huaweiName = {!! $huaweiName !!};
      const oppoName = {!! $oppoName !!};
      const xiaomiName = {!! $xiaomiName !!};

      const samsungWeight = {!! $samsungWeight !!};
      const appleWeight = {!! $appleWeight !!};
      const huaweiWeight = {!! $huaweiWeight !!};
      const oppoWeight = {!! $oppoWeight !!};
      const xiaomiWeight = {!! $xiaomiWeight !!};
      // console.log(samsungWeight);
   </script>
   <script src="{{ asset('js/chart.js') }}"></script>
@endsection

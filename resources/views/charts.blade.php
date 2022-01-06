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
        <div class="row my-5">
            <div class="col-1"></div>
            <div class="col" height="400">
                <h1>Top 5 brands device battery (mAh)</h1>
                <div class="mt-5" id="batteryChartLoading" height="400"></div>
                <canvas id="batteryChart" width="300"></canvas>
            </div>
            <div class="col-1"></div>
        </div>
        <div class="row my-5">
            <div class="col-1"></div>
            <div class="col" height="400">
                <h1>Top 5 brands device Weight and Battery Scatter Charts</h1>
                <div class="mt-5" id="scatterChartLoading" height="400"></div>
                <canvas id="scatterChart" width="300"></canvas>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
    <script>
        const samsung = {!! $samsung !!};
        const apple = {!! $apple !!};
        const huawei = {!! $huawei !!};
        const oppo = {!! $oppo !!};
        const xiaomi = {!! $xiaomi !!};
    </script>
    <script src="{{ asset('js/chart.js') }}"></script>
@endsection

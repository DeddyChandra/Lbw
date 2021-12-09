<nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container">
      <a class="navbar-brand" href=""><h3>Infomatics Phone Specification</h3></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav">
            <li class="nav-item">
               <a class="nav-link <?= $_SERVER['REDIRECT_URL'] == '/lbw/search' ? 'active': '' ?> " href="search">Search</a>
            </li>
            <li class="nav-item">
               <a class="nav-link <?= $_SERVER['REDIRECT_URL'] == '/lbw/brands' ? 'active': '' ?> " href="brands">Brands</a>
            </li>
            <li class="nav-item">
               <a class="nav-link <?= $_SERVER['REDIRECT_URL'] == '/lbw/latest' ? 'active': '' ?> " href="latest">Latest</a>
            </li>
            <li class="nav-item">
               <a class="nav-link <?= $_SERVER['REDIRECT_URL'] == '/lbw/top-by-interest' ? 'active': '' ?> " href="top-by-interest">Top By Interest</a>
            </li>
            <li class="nav-item">
               <a class="nav-link <?= $_SERVER['REDIRECT_URL'] == '/lbw/top-by-fans' ? 'active': '' ?> " href="top-by-fans">Top By Fans</a>
            </li>
            <li class="nav-item">
               <a class="nav-link <?= $_SERVER['REDIRECT_URL'] == '/lbw/charts' ? 'active': '' ?> " href="charts">Charts</a>
            </li>
         </ul>
      </div>
   </div>
</nav>
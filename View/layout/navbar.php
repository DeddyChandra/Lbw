<nav class="navbar navbar-expand-lg navbar-light bg-light">
   <a class="navbar-brand" href="">
      <h3>Infomatics Phone Specification</h3>
   </a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
         <li class="nav-item <?= $_SERVER['REDIRECT_URL'] == '/lbw/search' ? 'active' : '' ?> ">
            <a class="nav-link" href="search">Search</a>
         </li>
         <li class="nav-item <?= $_SERVER['REDIRECT_URL'] == '/lbw/brands' ? 'active' : '' ?> ">
            <a class="nav-link" href="brands">Brands</a>
         </li>
         <li class="nav-item <?= $_SERVER['REDIRECT_URL'] == '/lbw/latest' ? 'active' : '' ?> ">
            <a class="nav-link" href="latest">Latest</a>
         </li>
         <li class="nav-item <?= $_SERVER['REDIRECT_URL'] == '/lbw/top-by-interest' ? 'active' : '' ?> ">
            <a class="nav-link" href="top-by-interest">Top By Interest</a>
         </li>
         <li class="nav-item <?= $_SERVER['REDIRECT_URL'] == '/lbw/topbyfans' ? 'active' : '' ?> ">
            <a class="nav-link" href="topbyfans">Top By Fans</a>
         </li>
      </ul>
   </div>
</nav>
<script src="resource/javascript/search.js" defer></script>

<nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
   <ol class="breadcrumb m-3">
      <li class="breadcrumb-item active">Search</li>
   </ol>
</nav>

<div class="container">
   <div class="row mt-5">
      <div class="col-md">
         <div class="input-group mb-3">
            <input type="text" class="form-control input-keyword" placeholder="Search phone by name">
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-md compareBadges">
      </div>
   </div>
   <div class="row phones-container"></div>
</div>

<!-- Modal -->
<div class="modal fade" id="phoneDetailModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content phone-detail-modal">
      </div>
   </div>
</div>

<button type="button" id="openCompareButton" class="btn btn-success bottom-right-button invisible border border-dark" style="width: 100px;">Compare Result 
   <!-- <span class="badge badge-danger" id="totalCompareBadge">0</span> -->
</button>

<!-- Modal -->
<div class="modal fade" id="compareDetailModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content phone-detail-modal">
      </div>
   </div>
</div>
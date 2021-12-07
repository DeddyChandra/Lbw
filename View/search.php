<script src="resource/javascript/search.js" defer></script>

<nav aria-label="breadcrumb">
   <ol class="breadcrumb">
      <li class="breadcrumb-item" aria-current="page">Szearch</li>
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

<button type="button" id="openCompareButton" class="btn btn-success bottom-right-button invisible">Compare 
   <!-- <span class="badge badge-danger" id="totalCompareBadge">0</span> -->
</button>

<!-- Modal -->
<div class="modal fade" id="compareDetailModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content phone-detail-modal">
      </div>
   </div>
</div>
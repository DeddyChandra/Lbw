<script src="resource/javascript/topByInterest.js" defer></script>

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
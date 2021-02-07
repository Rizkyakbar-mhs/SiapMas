<div class="page-header header-filter clear-filter purple-filter" data-parallax="true"
    style="background-image:url({{ asset('img/bg2.jpg') }});min-height:500px">
    <div class="container">
        <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
                <div class="brand" style="text-align: center">
                    <h1>Data Obat</h1>
                </div>
            </div>
        </div>
    </div>
</div>
<form action="">
    <div class="main main-raised">
        <div class="section sction-basic" style="padding:0">
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="toolbar">
                                        <!--        Here you can write extra buttons/actions for the toolbar              -->
                                    </div>
                                    <div class="material-datatables">
                                        <table id="datatables" class="table table-striped table-no-bordered table-hover"
                                            cellspacing="0" width="100%" style="width:100%">
                                            <thead>
                                                <tr>
                                                    <th>Drug Code</th>
                                                    <th>Drug Name</th>
                                                    <th>Type</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Expired Date</th>
                                                    <th class="disabled-sorting text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($drugData as $drug)
                                                <tr>
                                                    <td>{{ $drug->drug_id }}</td>
                                                    <td>{{ $drug->drug_name }}</td>
                                                    <td>{{ $drug->type }}</td>
                                                    <td>{{ $drug->price }}</td>
                                                    <td>{{ $drug->qty }}</td>
                                                    <td>{{ $drug->exp_date }}</td>
                                                    <td class="text-right">
                                                        <a href="#" class="btn btn-link btn-info btn-just-icon like"><i
                                                                class="material-icons">favorite</i></a>
                                                        <a href="#"
                                                            class="btn btn-link btn-warning btn-just-icon edit"><i
                                                                class="material-icons">dvr</i></a>
                                                        <a href="#"
                                                            class="btn btn-link btn-danger btn-just-icon remove"><i
                                                                class="material-icons">close</i></a>
                                                    </td>
                                                </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>

<script>
    $(document).ready(function() {
        $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "pageLength": 10,
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ],
            responsive: true,
            language: {
                search: "Search ",
                searchPlaceholder: "Search records",
            }
        });

        var table = $('#datatables').DataTable();

        // Edit record

        table.on('click', '.edit', function() {
            $tr = $(this).closest('tr');

            if ($($tr).hasClass('child')) {
                $tr = $tr.prev('.parent');
            }

            var data = table.row($tr).data();
            alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] +
                '\'s row.');
        });

        // Delete a record

        table.on('click', '.remove', function(e) {
            $tr = $(this).closest('tr');

            if ($($tr).hasClass('child')) {
                $tr = $tr.prev('.parent');
            }

            table.row($tr).remove().draw();
            e.preventDefault();
        });

        //Like record

        table.on('click', '.like', function() {
            alert('You clicked on Like button');
        });
    });

</script>

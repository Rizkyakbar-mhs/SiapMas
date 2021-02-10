<div class="page-header header-filter clear-filter purple-filter" data-parallax="true"
    style="background-image: url({{ asset('img/bg2.jpg') }})">
    <div class="container">
        <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
                <div class="brand">
                    <h1>Form Obat</h1>
                </div>
            </div>
        </div>
    </div>
</div>
<form action="" class="form">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-6 ml-auto mr-auto">
                <div class="main main-raised">
                    <div class="section section-basic">
                        <div class="container" style="max-width:900px">
                            <div class="space-50">
                                <h5 class="card-category card-category-social">
                                    <div>
                                        <span class="material-icons">medication</span> <i>Tambah Obat</i>
                                    </div>
                                </h5>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="NIP" class="bmd-label-floating">Kode Obat...</label>
                                    <input type="text" class="form-control" id="kd_obat">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Nama" class="bmd-label-floating">Nama Obat...</label>
                                    <input type="text" class="form-control" id="Nama_obat">
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="Email" class="bmd-label-floating">Stock...</label>
                                    <input type="text" class="form-control" id="Stock">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="HP" class="bmd-label-floating">Harga...</label>
                                    <input type="text" class="form-control" id="HP">
                                </div>
                            </div>



                            <div class="form-group">
                                <label id="forexp" class="label-control">Tanggal Kadaluarsa</label>
                                <input type="text" class="form-control datetimepicker" id="exp">
                            </div>
                        </div>
                    </div>
                    <div class="footer text-center">
                        <input type="submit" class="btn btn-round btn-success" value="Tambah Obat"
                            style="margin-bottom:20px">
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>



<script>
    $(document).ready(function() {
        $(function() {
            $('#exp').datetimepicker({
                defaultDate: Date(),
                format: 'YYYY-MM-DD'
            });
        });
        // //init DateTimePickers
        // materialKit.initFormExtendedDatetimepickers();

    });

    function scrollToDownload() {
        if ($('.section-download').length != 0) {
            $("html, body").animate({
                scrollTop: $('.section-download').offset().top
            }, 1000);
        }
    }

</script>

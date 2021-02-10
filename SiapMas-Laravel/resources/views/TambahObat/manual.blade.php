@include('Templates/Header')
@include('Templates/Navbar')
<link href="css/material-kit.css" rel="stylesheet" />
<div class="page-header header-filter clear-filter purple-filter" data-parallax="true"
    style="background-image: url({{ asset('img/bg2.jpg') }})">
    <div class="container">
        <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
                <div class="brand text-center">
                    <h1>Form Tambah Obat Manual</h1>
                </div>
            </div>
        </div>
    </div>
</div>
<form action="{{ url('/tambahManual') }}" method="post" class="form">
@csrf
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
                                    <input type="text" class="form-control" id="kd_obat" name="drug_id" value="{{ old('drug_id') }}">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Nama" class="bmd-label-floating">Nama Obat...</label>
                                    <input type="text" class="form-control" id="Nama_obat" name="drug_name" value="{{ old('drug_name') }}">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="Email" class="bmd-label-floating">Stock...</label>
                                    <input type="text" class="form-control" id="Stock" name="qty" value="{{ old('qty') }}">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="HP" class="bmd-label-floating">Harga...</label>
                                    <input type="text" class="form-control" id="HP" name="price" value="{{ old('price') }}">
                                </div>
                            </div>
                            <div class="form-group">
                                <label id="forexp" class="label-control">Tanggal Kadaluarsa</label>
                                <input type="text" class="form-control datetimepicker" id="exp" name="exp_date" value="{{ old('exp_date') }}>
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

@include('Templates/Footer')



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

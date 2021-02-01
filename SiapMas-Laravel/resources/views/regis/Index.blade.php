<div class="page-header header-filter clear-filter purple-filter" data-parallax="true"
    style="background-image: url({{ asset('img/bg2.jpg') }})">
    <div class="container">
        <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
                <div class="brand">
                    <h1>Forum Registrasi</h1>
                </div>
            </div>
        </div>
    </div>
</div>
<form method="post" action="/regis" class="form">
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
                                        <span class="material-icons">person_add</span>
                                        <a class="btn btn-fill btn-info" style="color:white" disabled>Registrasi</a>
                                    </div>
                                </h5>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="NIP" class="bmd-label-floating">NIP...</label>
                                    <input type="text" class="form-control" name="NIP" value="{{ old('NIP') }}" 
                                    id="NIP">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Nama" class="bmd-label-floating">Name...</label>
                                    <input type="text" class="form-control" name="name" value="{{ old('name') }}" 
                                    id="Nama">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="Email" class="bmd-label-floating">Email...</label>
                                    <input type="text" class="form-control" name="email" value="{{ old('email') }}" 
                                    id="Email">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="HP" class="bmd-label-floating">Dial...</label>
                                    <input type="text" class="form-control" name="dial" value="{{ old('dial') }}" 
                                    id="HP">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="Passwrod" class="bmd-label-floating">Password...</label>
                                    <input type="password" class="form-control" name="password" id="Password">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Confirm" class="bmd-label-floating">Confirm Password...</label>
                                    <input type="password" class="form-control" id="Confirm">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="Alamat" class="bmd-label-floating">Address...</label>
                                <input type="text" class="form-control" name="address" value="{{ old('address') }}"
                                id="Alamat">
                            </div>
                        </div>
                    </div>
                    <div class="footer text-center">
                        <button type="submit" class="btn btn-round btn-success"
                            style="margin-bottom:20px">
                            REGISTRASI
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>

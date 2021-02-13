<nav class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100"
    id="sectionsNav">
    <div class="container">
        <div class="navbar-translate">
        <a class="navbar-brand" href="{{ url('/dashboard') }}">
                <h3>SIAPMAS DASHBOARD<h3> </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="sr-only">Navigation</span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                <li class="dropdown nav-item">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                        <i class="material-icons">how_to_reg</i> Users
                    </a>
                    <div class="dropdown-menu dropdown-with-icons">
                        <a href="{{ url('/register') }}" class="dropdown-item">
                            <i class="material-icons">person_add</i> Registrasi User
                        </a>
                        <a href="{{ url('/dataUser') }}" class="dropdown-item">
                            <i class="material-icons">people</i> Data Pegawai
                        </a>
                    </div>
                </li>
                <li class="dropdown nav-item">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                        <i class="material-icons">medication</i> Data Obat
                    </a>
                    <div class="dropdown-menu dropdown-with-icons">
                        <a href="{{ url('/tambahObat') }}" class="dropdown-item">
                            <i class="material-icons">add</i> Tambah Data Obat
                        </a>
                        <a href="{{ url('/dataObat') }}" class="dropdown-item">
                            <i class="material-icons">medication</i> Data Obat
                        </a>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="javascript:;" class="btn btn-rose btn-raised btn-fab btn-round" data-toggle="dropdown">
                        <i class="material-icons">notifications</i>
                    </a>
                </li>
                <li class="dropdown nav-item">
                    <a href="javascript:;" class="profile-photo dropdown-toggle nav-link" data-toggle="dropdown">
                        <div class="profile-photo-small">
                            <img src={{ asset('img/fabryzal.jpg') }} alt="Circle Image"
                                class="rounded-circle img-fluid">
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a href="{{ url('/profil') }}" class="dropdown-item">Profil</a>
                        <a href="{{ url('/report') }}" class="dropdown-item">Laporan</a>
                        <a href="{{ url('/signOut') }}" class="dropdown-item">Sign out</a>
                    </div>
                </li>
                <div>
                    {{ $session }}
                </div>
            </ul>
        </div>
    </div>
</nav>

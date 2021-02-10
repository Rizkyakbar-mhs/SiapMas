<div class="page-header header-filter"
    style="background-image: url({{ asset('img/bg7.jpg') }}); background-size: cover; background-position: top center;">
    <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 ml-auto mr-auto">
            <div class="card card-login">
              <form class="form" method="POST" action="/login">@csrf
                <div class="card-header card-header-primary text-center">
                  <h4 class="card-title">Login</h4>
                    <div class="social-line">
                      <a href="http://facebook.com/zl_xxiv" class="btn btn-just-icon btn-link">
                        <i class="fa fa-facebook-square"></i>
                      </a>
                      <a href="http://twitter.com/zl_xxiv" class="btn btn-just-icon btn-link">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="http://instagram.com/zl_xxiv" class="btn btn-just-icon btn-link">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </div>
                </div>
                  <p class="description text-center">Or Be Classical</p>
                    <div class="card-body" style="padding-right:0">
                      <div class="input-group" style="margin:0">
                        <div class="input-group-prepend">
                          <span class="input-group-text" style="padding-right:0">
                            <i class="material-icons">mail</i>
                          </span>
                            <div class="col-lg-12 col-sm-12" style="margin-bottom:10px">
                              <div class="form-group">
                                <label for="email" class="bmd-label-floating">Email...</label>
                                  <input id="email" name="email" value="{{ old('email') }}" type="email" class="form-control">
                                    <span class="bmd-help">We'll never share your email with anyone else.</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="input-group" style="margin:0">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="padding-right:0">
                              <i class="material-icons">lock_outline</i>
                            </span>
                              <div class="col-lg-12 col-sm-12" style="margin-bottom:10px">
                                <div class="form-group">
                                  <label for="Password" class="bmd-label-floating">Password...</label>
                                    <input id="Password" name="password" type="password" class="form-control">
                                </div>
                              </div>
                        </div>
                      </div>
                    </div>
                      <div class="footer text-center" style="margin-bottom: 10px">
                        <button class="btn btn-primary btn-round"><i class="material-icons">done</i>
                                Login</button>
                        <a href="{{ url('/lupaPass') }}" class="btn btn-primary btn-round"><i class="material-icons">help</i> Lupa
                                Password</a>
                      </div>
              </form>
            </div>
          </div>
        </div>
    </div>
</div>

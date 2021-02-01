<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <title>{{ $title }}</title>
    @include('Templates/Header')

</head>

<body class="landing-page sidebar-collapse">

    @include('Templates/Navbar')
    @include('DataObat/Index')
    @include('Templates/Footer')


</body>

</html>

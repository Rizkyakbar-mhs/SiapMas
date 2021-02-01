<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <title>{{ $title }}</title>
    @include('Templates/Header')

</head>

<body class="index-page sidebar-collapse">

    @include('Templates/Navbar')
    @include('regis/Index')
    @include('Templates/Footer')


</body>

</html>

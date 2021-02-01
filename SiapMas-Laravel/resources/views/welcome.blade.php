<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('Templates/Header')
    <link href="css/material-kit.css" rel="stylesheet" />

</head>

<body class="login-page sidebar-collapse">

    {{-- @include('Templates/Navbar') --}}
    @include('Main/Index')
    @include('Templates/Footer')

</body>

</html>

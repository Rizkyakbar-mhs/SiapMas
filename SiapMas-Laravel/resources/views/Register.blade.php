<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('Templates/Header')
    <link href="css/material-kit.css" rel="stylesheet" />

</head>

<body class="index-page sidebar-collapse">

    @include('Templates/Navbar')
    @include('regis/Index')
    @include('Templates/Footer')


</body>

</html>

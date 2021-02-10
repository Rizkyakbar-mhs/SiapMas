<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('Templates/Header')
    <link href="css/material-dashboard.css" rel="stylesheet" />

</head>

<body class="landing-page sidebar-collapse">

    @include('Templates/Navbar')
    @include('DataUser/Index')
    @include('Templates/Footer')


</body>

</html>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('Templates/Header')
    <link href="css/material-kit.css" rel="stylesheet" />

</head>

<body class="index-page sidebar-collapse">

    @include('Templates/Header')
    @include('LupaPass/Index')
    @include('Templates/Footer')


</body>

</html>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8"/>
    <title>Laravel Inertia Vue3</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    @routes
</head>
<body>
@inertia
<script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>


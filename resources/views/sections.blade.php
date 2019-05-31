@extends('base')
@section('content')
    <div id="sections"></div>
    <script>
        const sections = {!! $sections !!};
    </script>
    <script src="{{ asset('js/app.js')}}"></script>
@stop
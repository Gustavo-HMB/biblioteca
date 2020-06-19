@extends('layouts.app')

 <!--JS TABLE-->
@section('css_before')
    <!-- Page JS Plugins CSS -->
    <link rel="stylesheet" href="{{ asset('js/plugins/datatables/dataTables.bootstrap4.css') }}">
@endsection

@section('js_after')
    <!-- Page JS Plugins -->
    <script src="{{ asset('js/plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('js/plugins/datatables/dataTables.bootstrap4.min.js') }}"></script>

    <!-- Page JS Code -->
    <script src="{{ asset('js/pages/tables_datatables.js') }}"></script>
@endsection

@section('content')
<div class="content">
    <h2>Leitores 
        <a href="{{route('admin.reader.create')}}" type="button" class="btn btn-primary mr-5 mb-5 float-right btn-noborder">
            <i class="fa fa-plus mr-5"></i>Novo Leitor
        </a>
    </h2>
    <hr>
    <div class="block">
        <div class="block-content block-content-full">
            <table class="table table-bordered table-striped table-vcenter js-dataTable-full">
                <thead>
                    <tr>
                        <tr class="text-center">
                            <th>#</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($readers as $reader)
                        <tr>
                            <td>{{$reader->id}}</td>
                            <td>{{$reader->name}}</td>
                            <td>{{$reader->email}}</td>
                            <td>
                                <div class="form-group text-center">
                                    <a href="{{route('admin.reader.show', ['reader' => $reader->id])}}" class="btn btn-sm btn-success">Visualizar</a>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
                
            </table>
        </div>
    </div>

@endsection
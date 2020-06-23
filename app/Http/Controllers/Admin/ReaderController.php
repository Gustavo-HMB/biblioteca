<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Reader;

class ReaderController extends Controller
{
    /**
	 * @var Reader
	 */
	private $reader;

	public function __construct(Reader $reader)
	{
		$this->reader = $reader;
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $readers = ['data' => $this->reader->paginate(10)];

        return response()->json($readers);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $reader = $this->reader->create($data);

        $return = ['data' => ['menssage' => 'Leitor criado com sucesso!']];
        return response()->json($return, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $reader =['data' => $this->reader->find($id)];

        return response()->json($reader);
    }

    /**
     * Show all books already borrowed.
     *
     * @param  int  $reader
     * @return \Illuminate\Http\Response
     */
    public function showBooks($reader)
    {
        $books = $this->reader->find($reader)->books;

        return response()->json(['data' => $books], 200);
    }

    /**
     * Show book already borrowed.
     *
     * @param  int  $reader
     * @param  int  $book
     * @return \Illuminate\Http\Response
     */
    public function showBook($reader, $book)
    {
        $book = $this->reader->find($reader)->books->find($book);

        return response()->json(['data' => $book], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();

        $reader = $this->reader->find($id);
        $reader->update($data);

        $return = ['data' => ['menssage' => 'Leitor atualizado com sucesso!']];
        return response()->json($return, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $reader = $this->reader->find($id);
        $reader->delete();
    
        return response()->json(['menssage' => 'Leitor #' . $id . ' foi excluído com sucesso!'], 200);
    }

    /**
     * Seach Reader
     */
    public function search(Request $request)
    {
        $filter = $request->filter;
        $column = $request->column;
        
        $readers = $this->reader->search($filter, $column);

        return $readers;
    }
}

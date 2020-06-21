<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReaderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:190',
            'email' =>'required|email',
            'password' => 'required',
            'phone' => 'required',
            'gender' => 'required',
            'year' => 'required',
            'class' => 'required',
            'course' => 'required',
            'registration' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'Este campo é obrigatório!',
            'max' => 'Campo deve ter no mínimo :max caracteres',
            'email' => 'Insira um endereço de e-mail válido!',
        ];
    }
}
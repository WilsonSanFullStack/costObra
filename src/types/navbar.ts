type name = string
type path = string

export interface IOption {
  name: name
  path: path
}

export interface IOptionMenu {
Vista: [IOption]
Registro: [IOption]
Editar: [IOption]
}


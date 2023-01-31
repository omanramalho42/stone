import { defineType } from 'sanity'

export default defineType({
  name: 'prato',
  title: 'Prato',
  type: 'document',
  fields: [
    {
      name: "nome",
      title: "Nome do Prato",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: 'curta_descricao',
      type: 'string',
      title: 'Curta descrição',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: "preco",
      type: "number",
      title: "Preco do prato em R$"
    },
    {
      name: 'imagem',
      title: 'imagem',
      type: 'image'
    },
  ]    
})

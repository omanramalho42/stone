import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'destaque',
  title: 'Destaque Menu de Categorias',
  type: 'document',
  fields: [
    {
      name: "nome",
      title: "Destaque Nome da Categoria",
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
      name: 'restaurantes',
      title: 'Restaurantes',
      type: 'array',
      of: [{ type: "reference", to: [{ type: "restaurante" }] }],
    },
  ],
});

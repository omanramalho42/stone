import { defineType } from 'sanity'

export default defineType({
  name: 'categoria',
  title: 'Menu Categoria',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'nome da Categoria',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'imagem',
      title: 'imagem da Categoria',
      type: 'image',
      validation: (Rule) => Rule.required()
    },
  ],
})

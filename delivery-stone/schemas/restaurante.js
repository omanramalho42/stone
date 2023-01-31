import { defineType } from 'sanity'

export default defineType({
  name: 'restaurante',
  title: 'Restaurante',
  type: 'document',
  fields: [
    {
      name: 'nome',
      type: 'string',
      title: 'Nome do Restaurante',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'curta_descricao',
      type: 'string',
      title: 'Curta descrição',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'imagem',
      title: 'imagem',
      type: 'image'
    },
    {
      name: 'lat',
      title: 'Latitude do Restaurante',
      type: 'number'
    },
    {
      name: 'long',
      title: 'Longitude do Restaurante',
      type: 'number'
    },
    {
      name: 'endereco',
      title: 'Endereço do Restaurante',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'avaliacao',
      title: 'Informe uma avaliacao entre (1-5 estrelas)',
      type: 'string',
      validation: (Rule) => Rule.required()
      .min(1).max(5)
      .error("Porfavor entre com uma avaliação entre os valores (1 e 5)"),
    },
    {
      name: 'tipo',
      title: 'Categoria',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'categoria' }],      
    },
    {
      name: "pratos",
      type: "array",
      title: "Pratos",
      of: [{ type: "reference", to: [{ type: "prato" }] }],
    }
  ]
})

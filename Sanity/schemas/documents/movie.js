const movie = {
title: "Movie",
name: "movie",
type: "document",
fields: [
    {
    title: "Navnet på filmen",
    name: "name",
    type: "string",
    description: "dette er tittelen på filmen",
    validation: (Rule) => Rule.required(),
},

{
    title: 'Actor',
    name: 'actor',
    type: 'reference',
    to: [{type: 'actor'}],
    description: "dette er navnet på skuespilleren",    
}
        ]
                }

export default movie;
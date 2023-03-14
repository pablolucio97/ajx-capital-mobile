interface IDocument {
    item: {
        document: string;
        documentImage: string;
        status: 'Pendente Avaliação' | 'Validado';
    }
}

interface IDocuments {
    items: IDocument[]
}

export { IDocument, IDocuments }
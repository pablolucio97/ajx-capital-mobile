interface IDocument {
        document: string;
        documentImage: string;
        status: string;
}

interface IDocuments {
    items: IDocument[]
}

export { IDocument, IDocuments }
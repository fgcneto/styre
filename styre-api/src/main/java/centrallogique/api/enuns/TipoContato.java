package centrallogique.api.enuns;

public enum TipoContato {

    TELEFONE("telefone"), WHATSAPP("whatsapp"), EMAIL("email");

    private String valor;

    TipoContato(String valor) {
        this.valor = valor;
    }
}

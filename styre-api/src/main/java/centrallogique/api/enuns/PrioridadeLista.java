package centrallogique.api.enuns;

public enum PrioridadeLista {

    BAIXA("baixa"), MEDIA("media"), ALTA("alta");

    private String valor;

    PrioridadeLista(String valor) {
        this.valor = valor;
    }
}

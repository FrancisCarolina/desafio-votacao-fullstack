package vot.sicr.api.pauta;

public class PautaNotFoundException extends RuntimeException {
    public PautaNotFoundException(String message) {
        super(message);
    }
}

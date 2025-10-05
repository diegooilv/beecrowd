import java.io.IOException;
import java.util.Scanner;

public class Main {
 
    public static void main(String[] args) throws IOException {
    	Scanner leitor = new Scanner(System.in);
    	int caso = 1;
    	int N , numeros;
    	while (leitor.hasNext()) {
    		N = leitor.nextInt();
    		numeros = 1;
    		
    		for (int i = 1; i <= N; i++) {
    			numeros += i;
    		}
    		
    		System.out.println("Caso " + caso + ": " + numeros + " numero" + (numeros == 1 ? "" : "s"));
    		
    		for (int i = 0; i <= N; i++) {
    			if (i == 0) System.out.print(N > 0 ? "0 ": "0");
    			for (int j = 0; j < i; j++) {
    				if (i == N && j == N-1) System.out.print(i);
    				else System.out.print(i + " ");
    			}
    		}
    		
    		System.out.println("\n");
    		caso++;
    	}
    }
 
}
import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = Integer.parseInt(sc.nextLine());
        for (int i = 0; i < N; i++) {
            String linha = sc.nextLine().trim();

            if (linha.equals("P=NP")) {
                System.out.println("skipped");
            } else if (linha.contains("+")) {
                String[] partes = linha.split("\\+");
                int a = Integer.parseInt(partes[0].trim());
                int b = Integer.parseInt(partes[1].trim());
                System.out.println(a + b);
            } else {
                System.out.println("skipped");
            }
        }

        sc.close();
    }
}
package es.urjc.code.daw.library;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {
	
//	@Bean
//	org.h2.tools.Server h2Server() {
//	    Server server = new Server();
//	    try {
//	        server.runTool("-tcp");
//	        server.runTool("-tcpAllowOthers");
//	    } catch (Exception e) {
//	        e.printStackTrace();
//	    }
//	    return server;
//
//	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
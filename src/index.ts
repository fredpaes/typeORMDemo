import { createConnection, getRepository } from "typeorm";
import { Customer } from "./entity/Customer";

createConnection()
	.then(async connection => {
		const customerRepository = getRepository(Customer);
		const customers = await customerRepository.findAndCount();

		console.log("Customer count: ", customers);

		connection.close();
	})
	.catch(error => console.log("Error: ", error));

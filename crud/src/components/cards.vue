<template>
	<div class="w-100 d-flex flex-column align-center justify-content-center mt-10">
		<Nuevo :dialog="dialog" @dialog="dialog = $event" :item="userSelected" />
		<h1 class="">TARJETAS {{ titulo }}</h1>

		<v-card-title class="w-50 d-flex justify-content-end mb-2">
			<v-spacer></v-spacer>
			<v-btn color="secondary" dark @click="newUser()"> Nuevo cliente </v-btn>
		</v-card-title>

		<v-row class="w-50">
			<v-col v-for="(item, index) in items" :key="index" cols="12" sm="6" md="4">
				<v-card class="mx-auto" max-width="344" outlined>
					<v-list-item three-line>
						<v-list-item-content>
							<div class="text-overline mb-4">ID CLIENTE: {{ item.id }}</div>
							<v-list-item-title class="text-h5 mb-1">{{ item.name }}</v-list-item-title>
							<v-list-item-subtitle>{{ item.profession }}</v-list-item-subtitle>
						</v-list-item-content>
						<v-list-item-avatar tile size="80" color="grey" class="rounded" :src="item.avatar"></v-list-item-avatar>
						<!-- <p>{{ item.avatar }}</p> -->
					</v-list-item>

					<v-card-actions class="ml-2">
						<v-tooltip bottom>
							<template v-slot:activator="{ on, attrs }">
								<v-icon size="small" class="me-2" @click="editUser(item)" v-bind="attrs" v-on="on">
									mdi-pencil
								</v-icon>
							</template>
							<span>Editar</span>
						</v-tooltip>

						<v-tooltip bottom>
							<template v-slot:activator="{ on, attrs }">
								<v-icon
									size="small"
									class="me-2"
									@click="deleteUser(item)"
									v-bind="attrs"
									v-on="on"
								>
									mdi-delete
								</v-icon>
							</template>
							<span>Borrar</span>
						</v-tooltip>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import Nuevo from "./nuevoCliente.vue";
export default {
	props: ["titulo", "items"],
	components: {
		Nuevo,
	},
	data() {
		return {
			search: "",
			dialog: false,
			userSelected: {},
		};
	},
	methods: {
		...mapActions("clientes", ["deleteUserAction"]),
		newUser() {
			this.userSelected = {
				name: "",
				age: null,
				profession: "",
			};
			this.dialog = true;
		},
		editUser(item) {
			this.userSelected = item;
			this.dialog = true;
		},

		deleteUser(item) {
			this.$alertify.confirm(
				`¿Quieres eliminar el usuario ${item.name}?`,
				() => {
					this.deleteUserAction(item.id);
					this.$alertify.success("Usuario eliminado");
				},
				() => this.$alertify.error("Cancelado")
			);
		},
		getColor(age) {
			if (age > 40) return "red";
			else if (age > 29) return "orange";
			else return "green";
		},
	},
};
</script>
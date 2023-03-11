<template>
	<div>
	<Nuevo :dialog="dialog" @dialog="dialog = $event" :item="userSelected"/>
		<h1>{{ titulo }}</h1>

		<v-card>
			<v-card-title>
				{{ titulo }}
				<v-spacer></v-spacer>
				<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="Busqueda"
					single-line
					hide-details
				></v-text-field>
				<v-spacer></v-spacer>

				<v-btn color="primary" dark class="mb-2" @click="newUser()"> Nuevo usuario </v-btn>

			</v-card-title>
			<v-data-table :headers="cabecera" :items="items" :items-per-page="10" class="elevation-1">
				<template v-slot:[`item.age`]="{ item }">
					<v-chip :color="getColor(item.age)">
						{{ item.age }}
					</v-chip>
				</template>
				<template v-slot:[`item.actions`]="{ item }">
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
							<v-icon size="small" class="me-2" @click="deleteUser(item)" v-bind="attrs" v-on="on">
								mdi-delete
							</v-icon>
						</template>
						<span>Borrar</span>
					</v-tooltip>
				</template>
			</v-data-table>
		</v-card>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import Nuevo from "./nuevoCliente.vue"
export default {
	props: ["titulo", "cabecera", "items"],
	components: {
		Nuevo,
	},
	data() {
		return {
			search: "",
			dialog: false,
			userSelected: {}
		};
	},
	methods: {
		...mapActions("clientes", ["deleteUserAction"]),
		newUser() {
			this.userSelected = {
				name: "",
				age: null,
				profession: "",
			}
			this.dialog = true;
		},
		editUser(item) {
			this.userSelected = item;
			this.dialog = true;
		},

		deleteUser(item){
      this.$alertify.confirm(
        `¿Quieres eliminar el usuario ${item.name}?`,
        () => {
					this.deleteUserAction(item.id)
					this.$alertify.success('Usuario eliminado')
				},
        () => this.$alertify.error('Cancelado')
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

<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span v-if="item.age === null" class="text-h5">Nuevo cliente</span>
            <span v-else class="text-h5"
              >Editar cliente
              <span v-if="item.id > 0" class="text-h5">ID {{ item.id }}</span>
            </span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="Nombre*" v-model="item.name" required></v-text-field>
                  <small v-if="nombreObligatorio" class="text-error">El nombre es obligatorio</small>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="Edad*" v-model="item.age" type="number" required></v-text-field>
                  <small v-if="edadObligatorio" class="text-error">La edad es obligatoria</small>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Profesión*" v-model="item.profession" required></v-text-field>
                  <small v-if="profesionObligatorio" class="text-error">La profesión es obligatoria</small>
                </v-col>
                <!-- <v-col cols="12">
									<v-file-input
									:rules="rules"
									v-model="item.avatar"
									accept="image/png, image/jpeg, image/bmp"
									prepend-icon="mdi-camera"
									label="Avatar"
								></v-file-input>
								</v-col> -->
              </v-row>
            </v-container>
            <small>*Indica los campos obligatorios</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDialog()"> Cerrar </v-btn>
            <v-btn color="blue darken-1" text @click="save(item)"> Guardar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["dialog", "item"],
  data() {
    return {
      nombreObligatorio: false,
      edadObligatorio: false,
      profesionObligatorio: false,
      rules: [(value) => !value || value.size < 2000000 || "Avatar size should be less than 2 MB!"],
    };
  },
  methods: {
    ...mapActions("clientes", ["createUserAction", "editUserAction"]),
    save(item) {
      if (!item.id) {
        let isValid = true;

        if (!item.name) {
          this.nombreObligatorio = true;
          isValid = false;
        }

        if (!item.age) {
          this.edadObligatorio = true;
          isValid = false;
        }

        if (!item.profession) {
          this.profesionObligatorio = true;
          isValid = false;
        }

        if (isValid) {
          this.createUserAction(item);
          this.closeDialog();
        }
      } else {
        const user = {
          id: item.id,
          name: item.name,
          age: item.age,
          profession: item.profession,
        };
        this.editUserAction(user);
        this.closeDialog();
      }
    },
    closeDialog() {
      this.$emit("dialog", false);
    },
  },
};
</script>

<style scoped>
.text-error {
  color: red;
}
</style>

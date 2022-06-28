<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card :title="t('messages.country', 2)">
          <v-table data-test="datatable">
            <thead>
              <tr>
                <th v-for="header in headers" :key="header.title" class="text-left">{{ header.text }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="country in countries" :key="country.name">
                <td>{{ country.code }}</td>
                <td>{{ country.name }}</td>
                <td>{{ country.phone }}</td>
                <td>{{ country.currency }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { useQuery } from '@vue/apollo-composable'
import getCountries from '../graphql/queries/getCountries.gql'
import { computed } from "vue"

const { t } = useI18n()

const headers = [
  { text: t('messages.code'), value: 'code' },
  { text: t('messages.name'), value: 'name' },
  { text: t('messages.phone'), value: 'phone' },
  { text: 'currency', value: 'currency' },
]

const { result } = useQuery(getCountries)

// const countries = computed(() => console.log(result.value))
const countries = computed(() => result.value?.countries ?? [])
</script>

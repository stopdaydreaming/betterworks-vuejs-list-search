<template>
  <main class="listing">
    <h1 id="search-listing">Search Listing page</h1>

    <form>
      <label for="search">
        <span>Total: {{ filteredLists.length }} </span>
      </label>
      <input
        id="search"
        name="search"
        :aria-label="searchLabel"
        type="text"
        v-model="search"
        placeholder="Enter search criteria"
        onfocus="this.placeholder=''"
        onblur="this.placeholder='Enter search criteria'"
      />
    </form>

    <section v-for="list in filteredLists.slice(0, 10)" :key="list.id">
      <list :list="list"></list>
    </section>
  </main>
</template>

<script>
import List from "../components/List";
import ListClass from "../ListClass.js";

export default {
  name: "Listing",
  components: { List },
  data() {
    return {
      search: "",
      lists: [
        {
          id: 1,
          name: "Number Uno",
          subtitle: "The first one!"
        },
        {
          id: 2,
          name: "Number Ten",
          subtitle: "The tenth one!"
        },
        {
          id: 3,
          name: "Johnny Magic",
          subtitle: "Has a rad car."
        },
        {
          id: 4,
          name: "OK",
          subtitle: "What?"
        },
        {
          id: 5,
          name: "Hello World",
          subtitle: "Hi tiny world."
        },
        {
          id: 6,
          name: "Cinco Cinco Cinco",
          subtitle: "Sunday Sunday Sunday"
        },
        {
          id: 7,
          name: "Person Six",
          subtitle:
            "There is not enough data in the universe to describe this particular entry"
        },
        {
          id: 8,
          name: "George M.",
          subtitle: ""
        },

        {
          id: 9,
          name: "Michael J. Fox",
          subtitle: ""
        },
        {
          id: 10,
          name: "Captain C.",
          subtitle: "Super Cool"
        },
        {
          id: 11,
          name: "Edwin C.",
          subtitle: "___.___.___"
        },
        {
          id: 12,
          name: "Josh I.",
          subtitle: "The coolest."
        },
        {
          id: 13,
          name: "Todd_C",
          subtitle: "Why?"
        },
        {
          id: 14,
          name: "Ol' Hambone'",
          subtitle: "13"
        },
        {
          id: 15,
          name: "Beef Supreme",
          subtitle: "[]"
        },
        {
          id: 16,
          name: "Tim_ERIC",
          subtitle: "'A & B, 123'"
        },
        {
          id: 17,
          name: "",
          subtitle: "Who is this?"
        },
        {
          id: 18,
          name: "someone Else",
          subtitle: "'abc': 'ok'"
        },
        {
          id: 19,
          name: "Okee Dokey",
          subtitle: "Artichokey"
        },
        {
          id: 20,
          name: "Half-Shark-Alligator-Half-Man",
          subtitle: "Kool"
        },
        {
          id: 21,
          name: "",
          subtitle: "098"
        },
        {
          id: 22,
          name: "nope",
          subtitle: ""
        },
        {
          id: 23,
          name: "The Champ",
          subtitle:
            "'ZZZBCBJJBJBEBFJBEWBFBEWWJBJBFEWFBEWJBFJJEBWJFEW#R#@J#BJQBBQWDWQWDBJBJBDQWBJBJEWFBF'"
        }
      ]
    };
  },
  computed: {
    filteredLists() {
      return this.lists.filter(list =>
        list.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style>
input {
  width: 380px;
  margin: 10px;
}
label span {
  display: block;
  font-weight: bold;
  font-size: 1.35rem;
}
.material-icons {
  padding-top: 10px;
}
</style>

import { Getter } from "@/helpers/store";
import { computed, defineComponent, ref ,onMounted, watch} from "vue";
export default defineComponent({
  name: "Pagination",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    currentPage: {
      type: Number,
      required: true,
    },

    hasMorePages: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["pagechanged"],
  setup(props, context) {

    // #region States

    // #endregion


    // #region Methods

    function onClickFirstPage() {
      context.emit("pagechanged", 1);
    }

    function onClickPreviousPage() {
      context.emit("pagechanged", props.currentPage - 1);
    }

    function onClickPage(page: number) {
      context.emit("pagechanged", page);
    }

     
    function onClickNextPage() {
      context.emit("pagechanged", props.currentPage + 1);
    }

    function onClickLastPage() {
      context.emit("pagechanged", getPaginationOptions.value.totalPages);
    }

    function isPageActive(page: number) {
      return props.currentPage === page;
    }

    //#endregion

    // #region Computed
    const startPage = computed(() => {
      if (props.currentPage === 1) {
        return 1;
      }
      if (props.currentPage === getPaginationOptions.value.total) {
        return getPaginationOptions.value.total - props.maxVisibleButtons + 1;
      }
      return props.currentPage - 1;
    });

    const endPage = computed(() => {
      return Math.min(
        startPage.value + (props.maxVisibleButtons - 1),
        getPaginationOptions.value.total
      );
    });

    const pages = computed(() => {
      const range = [];

      for (let i = startPage.value; i <= endPage.value; i += 1) {
        range.push({
          name: i,
          isDisabled: i === props.currentPage,
        });
      }
      return range;
    });

    const isInFirstPage = computed(() => {
      return props.currentPage === 1;
    });

   
    const isInLastPage = computed(() => {
      return props.currentPage === getPaginationOptions.value.total;
    });


    //Store
    const getPaginationOptions = computed(() => {
      return Getter({
        namespace: 'pagination',
        getter: 'getPaginationOptions'
      })
    })

    // #endregion

    // #region Hooks

    onMounted(() => {
   
    })
    // #endregion

    // #region Watch
   
    // #endregion
    return {
      isInFirstPage,
      onClickFirstPage,
      onClickPreviousPage,
      pages,
      onClickNextPage,
      isInLastPage,
      onClickLastPage,
      isPageActive,
      onClickPage,
      getPaginationOptions
    };
  },
});

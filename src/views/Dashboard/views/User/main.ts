import { computed, defineComponent } from "vue";
import { Getter } from '@/helpers/store';
import { EnumStoreNamespace } from '@/enums';
import { GET_CURRENT_USER } from '@/store/modules/user/constants';

export default defineComponent({
  name: "CurrentUserPage",
  setup() {
    const currentUser = computed(() => {
        return Getter({
          namespace: EnumStoreNamespace.USER,
          getter: GET_CURRENT_USER,
        });
      });
    return {
        currentUser
    };
  },
});

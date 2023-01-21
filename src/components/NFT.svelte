<script lang="ts">
    import type { NFT } from "../domain/nft";
    import transformURLs from "../utils/transformURLs";
    export let nft: NFT;
    import truncateString from "../utils/truncateString";
</script>

{#if nft.imageURL}
    <div class="the-NFT">
        <h2>{nft.title}</h2>
        <br />
        {#if nft.description}
        {truncateString(nft.description, 20)}
        {/if}
        <br />
        <img src={transformURLs(nft.imageURL)} alt="" /> <br />
        <!-- {transformURLs(nft.imageURL)} -->
    </div>
{/if}

<style>
    img {
        height: 150px;
        width: 150px;
    }
    .the-NFT {
        margin: 0 auto;
    }
</style>
